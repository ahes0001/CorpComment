import { TriangleUpIcon } from "@radix-ui/react-icons"

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
            <TriangleUpIcon />
            <span>593</span>
        </button>
        <div>
            <p>C</p>

        </div>
        <div>
            <p>Company</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis totam ipsa provident illum voluptatum omnis!</p>
        </div>

        <p>4</p>
      </li>
    </ol>
  )
}
