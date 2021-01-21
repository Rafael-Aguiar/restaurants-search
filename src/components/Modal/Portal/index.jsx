import ReactDOM from 'react-dom';

function portalModal({ children }) {
  const portal = document.getElementById('root-modal');
  return ReactDOM.createPortal(children, portal)
}

export default portalModal;
