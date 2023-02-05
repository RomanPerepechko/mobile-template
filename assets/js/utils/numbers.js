export function splitThousands(number) {

    if (!number && isNaN(number)) {
        return '';
    }

    if (number.toString().includes('.')) {
        const parts = number
            .toString()
            .split('.');
        parts[0] = parts[0]
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    } else {
        return number.toString()
            .replace(/\D/g, '')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
}