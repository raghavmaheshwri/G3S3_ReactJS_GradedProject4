import '../../../css/customToast.css'

type Props = {
    message: string,
    type:string
}

const ToastSection = ({ message, type }: Props) => {
    var typeoftoast: string = `customToast${type}`;
    return (
        <div className={`position-absolute top-0 start-0 px-2 customToast ${typeoftoast}`}>
            {message}
        </div>
    )
}

export default ToastSection