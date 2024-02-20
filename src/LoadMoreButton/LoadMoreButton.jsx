 const LoadMoreButton = ({onClick}) => (
   <button 
   style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // borderRadius: '30px',
    border:'1px solid black',
   color:'black',
   backgroundColor:'aquamarine',
   minWidth: '169px',
   height: '30px',
   padding: '20px',
   marginRight: 'auto',
   marginLeft: 'auto',

}}
   
   type="button" onClick={onClick}>Load more</button>);

   export default LoadMoreButton;
