class ErrorHandler {
    private errorsOnStack: any[] = []

    handle(err: any) {
        this.errorsOnStack.push(err)
        this.sendErrors()
        .then(() => this.errorsOnStack = [])
        .catch(err => this.errorsOnStack.push(err))
    }

    private async sendErrors() {
        // TODO implementar envio de erros
    }
}

export default new ErrorHandler()
