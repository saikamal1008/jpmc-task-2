import React, { Component } from 'react';
import { Table } from '@jpmorganchase/perspective';
import { Table } from '@finos/perspective';
import { ServerRespond } from './DataStreamer';
import './Graph.css';
 
 interface IProps {
  * Perspective library adds load to HTMLElement prototype.
  * This interface acts as a wrapper for Typescript compiler.
  */
 interface PerspectiveViewerElement {
 interface PerspectiveViewerElement extends HTMLElement{
   load: (table: Table) => void,
 }
 
class Graph extends Component<IProps, {}> {
 
   componentDidMount() {
     // Get element to attach the table from the DOM.
    const elem: PerspectiveViewerElement = document.getElementsByTagName('perspective-viewer')[0] as unknown as PerspectiveViewerElement;
    const elem = document.getElementsByTagName('perspective-viewer')[0] as unknown as PerspectiveViewerElement;
 
     const schema = {
       stock: 'string',
 class Graph extends Component<IProps, {}> {
 
       // Add more Perspective configurations here.
       elem.load(this.table);
      elem.setAttribute('view', 'y_line');
      elem.setAttribute('column-pivots', '["stock"]');
      elem.setAttribute('row-pivots', '["timestamp"]');
      elem.setAttribute('columns','["top_ask_price"]');
      elem.setAttribute('aggregates', `
      {"stock": "discount count",
      "top_ask_price":"avg",
      "top_bid_price": "avg",
      "timestamp":"distinct count"}`)
     }
   }
 
export default Graph;
