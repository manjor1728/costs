import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnchange, value}) {
  return (
    <div className={styles.formControl}>
        <label htmlFor={name}>{text}:</label>
        <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            onChange={handleOnchange}
            value={value}>
        </input>
    </div>
  )
}

export default Input