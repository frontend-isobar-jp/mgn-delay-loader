import mgnDelayLoader from './mgn-delay-loader';

new mgnDelayLoader(
    ".j-delayloader img",
    {
        transitionSpeed: 1000,
        delaySpeed: 200,
        threshold: 100,
        bg: "#666"
    }
);
