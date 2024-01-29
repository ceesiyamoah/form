import { useId } from 'react';
import styles from './textfield.module.css';

const TextField = ({ label, ...rest }) => {
	const id = useId();
	return (
		<div className={styles.textfield}>
			{label && <label htmlFor={id}>{label}</label>}
			<input id={id} {...rest} className={styles.input} />
		</div>
	);
};

export default TextField;
