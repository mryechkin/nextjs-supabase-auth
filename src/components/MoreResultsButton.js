'use client'


export default function MoreResultsButton(props) {

    return (
      <button onClick={props.setResultsCount(props.resultsCount + 20)}>more</button>
    );


  
}