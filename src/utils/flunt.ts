export class Flunt {
    constructor(public errors: any[] = []) { }

    clear() {
        this.errors = [];
    }

    hasMaxLen = (value, max, message) => {
        if (!value || value.length > max) {
            this.errors.push(message);
        }
    }

    hasMinLen = (value, min, message) => {
        if (!value || value.length < min) {
            this.errors.push(message);
        }
    }

    isEmail = (value, message) => {
        const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(value)) {
            this.errors.push(message);
        }
    }

    isFixedLen = (value, len, message) => {
        if (value.length !== len) {
            this.errors.push(message);
        }
    }

    isRequired(value, message) {
        if (!value || value.length <= 0) {
            this.errors.push(message);
        }
    }

    isValid() {
        return this.errors.length === 0;
    }
}