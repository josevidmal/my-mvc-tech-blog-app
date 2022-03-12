const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Could not log out.');
    }
};

document.querySelector('#logout').addEventListener('click', logout);

if (!!document.getElementById('new-post-btn')) {
    document.getElementById('blog-title').innerText = 'Your Dashboard';
}