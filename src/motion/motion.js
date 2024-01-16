
export const slideVariant = (xValue) => {
    return {
      hidden: {
        x: xValue,
        opacity: 0,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          delay: 0,
          duration: .5,
          when: 'beforeChildren'
        },
      },
    };
};

export const opacityVariant = (delay) => {
    return {
        hidden: {
            opacity: 0,
            scale: 0.8
        },

        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: delay,
                duration: 1,
            }
        }
    }
}