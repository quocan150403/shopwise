function Helmet(props) {
  document.title = 'Shopwise' + props.title;
  return props.children;
}

export default Helmet;
