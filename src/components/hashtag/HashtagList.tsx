import HashtagItem from "./HashtagItem";

type HashTagListProps = {
  companyList: Array<string>;
  handleCompanySelection: (text:string) => void;
}

export default function HashtagList({companyList, handleCompanySelection}:HashTagListProps) {
  return (
    <ul className="hashtags">
      <HashtagItem companyName = "All" onCompanySelection = {handleCompanySelection}/>
      {companyList.map(companyName => 
      <HashtagItem companyName ={companyName} onCompanySelection = {handleCompanySelection}/>
    )}
      
    </ul>
  )
}
