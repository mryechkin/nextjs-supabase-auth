import DB_LABELS from 'src/constants/db-labels';

export default function RefData(props) {
  let formattedData;

  if (props.dataType === 'labels_generated') {
    formattedData = props.data.map((label) => (
      <li className="pl-5 text-left">{label}</li>
    ));
  }

  if (props.dataType === 'ocr_generated') {
    formattedData = <div className="pl-5 text-left">{props.data}</div>;
  }
  if (props.dataType === 'web_matches_generated') {
    console.log('DATA', props.data.matches);
    formattedData = props.data.matches.map((webResult) => (
      <li className="pl-5 text-left">
        <a
          href={webResult.url}
          dangerouslySetInnerHTML={{ __html: webResult.page_title }}
        ></a>
      </li>
    ));
  }
  if (props.dataType === 'translation_generated') {
    formattedData = (
      <div
        className="pl-5 text-left"
        dangerouslySetInnerHTML={{ __html: props.data }}
      ></div>
    );
  }

  //quick and dirty: just pass hardcoded labels and check w object

  return (
    <div>
      <div>{DB_LABELS[props.dataType]}</div>
      {formattedData}
    </div>
  );
}
