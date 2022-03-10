const router = require('express').Router();
const { User, Post, Comment } = require('../models/index');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const post = postData.get({ plain: true });
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id/comments', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'username'],
                },
                {
                    model: Comment,
                    attributes: ['comment_text', 'date_created', 'user_id', 'post_id'],
                },
            ],
        });

        const commentData = await Comment.findAll({
            where: {
                post_id: req.params.id
            },
            include: [
                {
                    model: User,
                    attributes: ['id', 'username'],
                },
                {
                    model: Post,
                    attributes: ['id']
                },
            ],
        });

        const post = postData.get({ plain: true });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render('PostComments', {
            ...post,
            comments,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
        })

        const user = userData.get({ plain: true });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            ...user,
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/createPost', withAuth, async (req, res) => {
    try {
        res.render('createPost', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
})

module.exports = router;