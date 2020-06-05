const generateTheme = (name, primary, secondary, textPrimary, textSecondary, textContrast, background) => {
    return { name, primary, secondary, textPrimary, textSecondary, textContrast, background };
}

export const LIGHT_THEME = generateTheme("LIGHT", "#ff6600", "#3c963c", "#000000", "#828282", "#ffffff", "#f0f2f5");
export const DARK_THEME = generateTheme("DARK", "#ff6600", "#3c963c", "#ffffff", "#828282", "#000000", "rgb(10, 12, 15)");

/**
header:
 text: black 
 background: primary (same)

table: 
header: primary
header text: black
even: rgb(48, 45, 45)
odd: rgb(13, 13, 6)
cell text: white/grey

Previous / Next => same

Chart background : rgb(0, 0, 0)

Footer : contrast
  */