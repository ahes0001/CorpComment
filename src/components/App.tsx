import { useEffect, useMemo, useState } from "react";
import { TFeedbackItem } from "../lib/types";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);

  const [isloading, setIsLoading] = useState(false); 

  const [errorMessage, setErrorMessage] = useState(""); 

  const [companySelection, setCompanySelection] = useState("All");

  const filteredFeedBackItems = useMemo(() => feedbackItems.filter((Item)=> companySelection =="All" || Item.company == companySelection), [ companySelection, feedbackItems]);


  const handleAddToList = async (text:string) => {
    const companyName = text.split(" ").find(word => word.includes('#'))!.substring(1);
    const newItem:TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      company: companyName,
      daysAgo: 0,
      upvoteCount: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase()
    };
    setFeedbackItems([...feedbackItems , newItem]);

    // fetch is async so it will return a promise
    await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );


  };

  const companyList = useMemo(() =>feedbackItems.map((item) => item.company).filter(
    (company, index, array) => {
      // return true if the company is the first occurence in the array
      // this is why we use the index of the company in the array
      return array.indexOf(company) === index;
    }
  ), [feedbackItems]);

  const handleCompanySelection = (company: string) => {
    setCompanySelection(company);
  }


  useEffect(() => {
    const fetchFeedbacksItems = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");

      if (!response.ok) {
        throw new Error("There was an error loading the feedbacks");
      }
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
        
      } catch (error) {
        setErrorMessage("There was an error loading the feedbacks");
      }
      
      setIsLoading(false);
    };
    

    fetchFeedbacksItems()
  }, []);

    // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
  //   )
  //     .then((response) =>  {
  //       if(!response.ok) {
  //         throw new Error("There was an error loading the feedbacks");
  //       }
  //       return response.json()})
  //     .then((data) => {
  //       setFeedbackItems(data.feedbacks);
  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       // nerwork erro, nmot in 2xx response, or JOSN parsing error
  //       setErrorMessage("There was an error loading the feedbacks");
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <div className="app">
      <Footer />

      <Container feedbackItems = {filteredFeedBackItems} isloading = {isloading} errorMessage = {errorMessage}
      handleAddToList = {handleAddToList}
      />
      

      <HashtagList companyList ={companyList} handleCompanySelection = {handleCompanySelection}/>
    </div>
  );
}

export default App;
