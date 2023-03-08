import ReactQuill from "react-quill";

export default function Viewer(props) {
  return <ReactQuill value={props.value} readOnly={true} theme={"bubble"} />;

  // <div dangerouslySetInnerHTML={{ __html: props.value }}></div>;
}
