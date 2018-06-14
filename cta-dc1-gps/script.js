var aladin = A.aladin('#aladin-lite-div',
{
    survey : 'CTA-DC1',
    fov : 180,
    target : '0, 0',
    cooFrame : 'galactic'
});

aladin.setImageSurvey(
    aladin.createImageSurvey(
        'CTA-DC1', 'CTA-DC1', 'out', 'galactic', 3,
        {imgFormat: 'png'}
    )
);
