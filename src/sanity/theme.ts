import { buildLegacyTheme } from 'sanity'

const props = {
    '--my-white': '#fff',
    '--my-black': '#171717',
    '--my-brand': '#000000',
    '--my-red': '#db4437',
    '--my-yellow': '#f4b400',
    '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    '--black': props['--my-black'],
    '--white': props['--my-white'],

    '--gray': '#666',
    '--gray-base': '#666',

    '--component-bg': props['--my-white'],
    '--component-text-color': props['--my-black'],

    /* Brand */
    '--brand-primary': props['--my-brand'],

    // Default button
    '--default-button-color': '#666',
    '--default-button-primary-color': props['--my-brand'],
    '--default-button-success-color': props['--my-green'],
    '--default-button-warning-color': props['--my-yellow'],
    '--default-button-danger-color': props['--my-red'],

    /* State */
    '--state-info-color': props['--my-brand'],
    '--state-success-color': props['--my-green'],
    '--state-warning-color': props['--my-yellow'],
    '--state-danger-color': props['--my-red'],

    /* Navbar */
    '--main-navigation-color': props['--my-black'],
    '--main-navigation-color--inverted': props['--my-white'],

    '--focus-color': props['--my-brand'],
})

const darkProps = {
    '--my-white': '#121212', // Main Dark Background (Deep Charcoal)
    '--my-black': '#e6e6e6', // High contrast text
    '--my-brand': '#3B82F6', // Electric Blue
    '--my-red': '#db4437',
    '--my-yellow': '#f4b400',
    '--my-green': '#0f9d58',
}

export const myDarkTheme = buildLegacyTheme({
    /* Base theme colors */
    '--black': '#000000', 
    '--white': darkProps['--my-white'], // Maps to component-bg
    
    '--gray': '#6b7280', 
    '--gray-base': '#6b7280',
    
    '--component-bg': darkProps['--my-white'],
    '--component-text-color': darkProps['--my-black'],
    
    /* Brand */
    '--brand-primary': darkProps['--my-brand'],
    
    // Default button
    '--default-button-color': '#6b7280',
    '--default-button-primary-color': darkProps['--my-brand'],
    '--default-button-success-color': darkProps['--my-green'],
    '--default-button-warning-color': darkProps['--my-yellow'],
    '--default-button-danger-color': darkProps['--my-red'],

    /* State */
    '--state-info-color': darkProps['--my-brand'],
    '--state-success-color': darkProps['--my-green'],
    '--state-warning-color': darkProps['--my-yellow'],
    '--state-danger-color': darkProps['--my-red'],

    /* Navbar */
    '--main-navigation-color': darkProps['--my-white'], // Dark navbar
    '--main-navigation-color--inverted': darkProps['--my-black'],

    '--focus-color': darkProps['--my-brand'],
})
