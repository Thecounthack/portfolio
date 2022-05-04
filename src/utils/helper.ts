module.exports = {
    deleteHashHandler: () => {
        setTimeout(() =>
            history.pushState(
                '',
                document.title,
                window.location.pathname + window.location.search
            )
        );
    },
};
