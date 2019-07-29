import * as React from 'react';

export interface FieldInterface {
  name: string;
  type: string;
  placeholder:any;
  input: any;
  meta: any;
  label?:string;
  stock?:number;
  searchText?:string;
  submit?:any;
  inputValue?:string;
  options?:any;
  className?:any;
  checked?: boolean;
}

class Input {

  renderField(field:any) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

}
const input = new Input();


export default input;
