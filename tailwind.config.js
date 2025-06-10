tailwind.config = {
      darkMode: 'class',
      theme: {
        container: {
          center: true,
          padding: '16px',
        },
        extend: {
          colors: {
            clifford: '#da373d',
            primary: {
              50: '#f0fdf4',
              100: '#dcfce7',
              200: '#bbf7d0',
              300: '#86efac',
              400: '#4ade80',
              500: '#22c55e',
              600: '#16a34a',
              700: '#15803d',
              800: '#166534',
              900: '#14532d',
            }
          },
          screens: {
            '2xl': '1320px',
          },
          animation: {
            'fade-in': 'fadeIn 0.5s ease-in-out forwards',
            'float': 'float 6s ease-in-out infinite',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' },
            }
          }
        }
      }
    }