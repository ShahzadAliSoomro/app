import { Button } from '@mui/material';
// import './button.css';

export default function BootstrapBtn(props) {
    const { label, onClick, classes, link } = props;

    return <>
        <button className={classes} onClick={onClick}>{label} link={link}</button>
    </>
};

export function MuiButton(props) {
    const { label, onClick, type, variant } = props;

    return <>
        <Button onClick={onClick} variant={variant}>{label}</Button>
    </>

}