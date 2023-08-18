import Form from "./Form";
import { useParams } from "react-router-dom";

function EditForm() {
  const { id } = useParams();
  return <Form edit={true} id={id} />;
}

export default EditForm;
