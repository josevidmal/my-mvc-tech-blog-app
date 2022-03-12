const urlArr = document.location.href.split('/');
urlArr.pop();
const id = urlArr.pop();

const updatePost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${id}/update`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Could not update post');
        }
    }
};

const deletePost = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${id}/delete`, {
        method: 'DELETE',
        body: null,
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Could not delete post');
    }
}

document.querySelector('#edit-post-form').addEventListener('submit', updatePost);
document.querySelector('#delete-btn').addEventListener('click', deletePost);