import DB_LABELS from "src/constants/db-labels";

//need useState for each editable field
//need to show uneditable and "edit" button by default
  //button visible only if user has permissions
  //clicking button changes state
  //if state is === then show editable text field on entry
  //submit button saves new changes - watch net ninja vid to confirm behavior

export default function EditEntry(props) {

  console.log(DB_LABELS[props.dataType]);


  return (
    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}
