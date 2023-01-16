import React from 'react';

import './InputLink.scss';

export interface InputLinkProps {
  prop?: string;
}

export function InputLink({ prop = 'default value' }: InputLinkProps) {
  return (
    <aside id="revue-embed" className="p-4 my-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-100 " aria-label="Subscribe to the Flowbite newsletter">
      <h3 className="mb-3 text-4xl font-extrabold text-gray-800 left-0">Get Flaticon SVG file here</h3>
      <div id="revue-form" >
        <div className="flex items-end mb-3">
          <div className="relative w-full revue-form-group">
            <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
            <div className="absolute inset-y-0 left-0 flex items-center px-5 pointer-events-none">
              <img className="w-8 h-8 text-gray-500 dark:text-gray-400" src='/link.svg'/>
            </div>
            <input className="revue-form-field border bg-gray-50 text-gray-900 rounded-lg block w-full pl-16 p-4  " placeholder="Paste your Flaticon URL here to download SVG file..." type="email" name="member[email]" id="member_email" />
          </div>
        </div>
        <div className="revue-form-actions w-full" >
          <input type="submit" value="Download SVG" className="w-full cursor-pointer text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center" />
        </div>
      </div>
    </aside>
  );
}
