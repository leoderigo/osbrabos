import ButtonLogin from './ButtonLogin'
export default ButtonLogin

export type ButtonLoginProps = {
    onFail?: () => void
    onSuccess?: () => void
}
