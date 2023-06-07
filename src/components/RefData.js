import DB_LABELS from "src/constants/db-labels";

export default function RefData(props) {

  

  let formattedData;

  if (props.dataType === 'labels_generated') {

    formattedData = props.data.map(label =>
      <li className="text-left pl-5">{label}</li>
    );
  }

  if (props.dataType === 'ocr_generated') {
    formattedData = <div className="text-left pl-5">{props.data}</div>
  }
  if (props.dataType === 'web_matches_generated') {
    console.log("DATA", props.data.matches)
    formattedData = props.data.matches.map(webResult =>
      <li className="text-left pl-5">
      <a href={webResult.url} dangerouslySetInnerHTML={{__html: webResult.page_title}}></a>
      </li>
    );
  }
  if (props.dataType === 'translation_generated') {
    formattedData = <div className="text-left pl-5" dangerouslySetInnerHTML={{__html: props.data}}></div>
  }

  

  //quick and dirty: just pass hardcoded labels and check w object


  return (
    <div>
      <div>{DB_LABELS[props.dataType]}</div>
      {formattedData}
    </div>

  );
}
