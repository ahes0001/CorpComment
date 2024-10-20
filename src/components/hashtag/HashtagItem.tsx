
type HashtagItemProps = {
    companyName: string;
    onCompanySelection: (companyName: string) => void;
}

export default function HashtagItem({companyName, onCompanySelection}:HashtagItemProps) {
  return (
    <li onClick={() => onCompanySelection(companyName)} key={companyName}>
        <button>#{companyName}</button>
      </li>
  )
}
