import React from 'react';
import * as ReactDOM from 'react-dom';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import Individual from './Individual';
import Business from './Business';
import History from './History';
import '../../styles/Transcript.css';
const Transcript = () => {
  const [selected, setSelected] = React.useState(0);
  const handleSelect = e => {
    setSelected(e.selected);
  };
  return (
    <div>
        <div style={{width:"100%",height:"7px"}}></div>
    <TabStrip selected={selected} onSelect={handleSelect} id="subtabs_transcript">
        <TabStripTab title="Individual" id="subtabs_transcript">
          <div>
      <Individual/>
          </div>
        </TabStripTab>
        <TabStripTab title="Business">
          <div>
       <Business/>
          </div>
        </TabStripTab>
        <TabStripTab title="History">
          <div>
           <History/>
          </div>
        </TabStripTab>
  
      </TabStrip>
  
    </div>
  )
 
  

};
export default Transcript;