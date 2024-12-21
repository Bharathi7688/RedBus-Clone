function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert(`Coupon Code "${code}" copied to clipboard!`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

