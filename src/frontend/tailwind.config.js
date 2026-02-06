import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                gold: {
                    DEFAULT: 'oklch(var(--gold))',
                    light: 'oklch(var(--gold-light))',
                    dark: 'oklch(var(--gold-dark))',
                    glow: 'oklch(var(--gold-glow))',
                    muted: 'oklch(var(--gold-muted))'
                },
                neutral: {
                    warm: 'oklch(var(--neutral-warm))',
                    cool: 'oklch(var(--neutral-cool))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
                serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'Times New Roman', 'serif']
            },
            letterSpacing: {
                tighter: '-0.025em',
                tight: '-0.015em'
            },
            boxShadow: {
                'gold': '0 0 40px oklch(var(--gold) / 0.25)',
                'gold-lg': '0 0 60px oklch(var(--gold) / 0.35)',
                'gold-xl': '0 10px 80px oklch(var(--gold) / 0.4)',
                'inner-gold': 'inset 0 0 30px oklch(var(--gold) / 0.12)',
                'glow-subtle': '0 0 20px oklch(var(--gold) / 0.15)',
                'glow-medium': '0 0 30px oklch(var(--gold) / 0.2)',
                'glow-strong': '0 0 40px oklch(var(--gold) / 0.3)'
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
