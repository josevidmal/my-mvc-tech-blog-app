const commentPosts = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#post-comment').value;
    const id = document.location.href.split('/').pop();

    if (comment_text) {
        const response = await fetch(`/api/posts/${id}/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/post/${id}/comments`)
        } else {
            alert('Could not create comment');
        }
    }
};

document.querySelector('#comment-form').addEventListener('submit', commentPosts);