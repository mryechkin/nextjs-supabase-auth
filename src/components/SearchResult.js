import RESOURCE_URL from 'src/constants/resourcesUrl';

export default function SearchResult(props) {
  let link = 'entry/' + props.id;

  if (props.resource_type === 'image') {
    return (
      <div className="">
        <a href={link}>
          <img
            width="300px"
            className="p-2"
            src={RESOURCE_URL + props.resource_endpoint}
            href={link}
          />
        </a>
        <a href={link}>{props.description_generated.description}</a>
      </div>
    );
  }
}