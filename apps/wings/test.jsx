import React from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import {debounce} from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete() {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

     
  return (
    <div className="wrapper">
      <div className={classnames('control', { 'is-loading': loading })}>
        <input type="text" className="input" />
      </div>
      <div className="list is-hoverable" />
    </div>
  );
}
