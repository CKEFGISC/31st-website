import $ from 'jquery';

export default function Scroll(props) {
  return (
    <span style={{ cursor: "pointer" }} onClick={() => {
      const target = $(props.to)[0];
      if (target) target.scrollIntoView();
    }} {...props}>{props.children}</span>
  );
}
