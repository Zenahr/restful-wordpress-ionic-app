<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'C]ty2%xw{^NUxAC?#$4rG7ycu+nKHU11#G9GOcGjrSkbmH+C^}oM(R<^^*DB!dYE' );
define( 'SECURE_AUTH_KEY',  '%rzH&a=6q*F6DZ^3c2H|`3bNhJG531d$^zzyZ@_DEO;2[Q uK-pd]Lhah<BvQK=n' );
define( 'LOGGED_IN_KEY',    'rMj}=<kKWGnj=$(g98_:0t)]{2>Vks. 3*)hPk-gaGx<e.mgWu@P?>Tw|swD^`!G' );
define( 'NONCE_KEY',        'F!,y{**c!<Rru=fsvGKG]0JYfw~y/ZSahdm0IS!q{taV~gum.#G/F$OZLEHU A8w' );
define( 'AUTH_SALT',        '$*#BT/tHGK.`%_i%]WacbKJUSzg7:H@JK#zMpZy5Lk|~Vhp>#E5= vj:>BS);Fmw' );
define( 'SECURE_AUTH_SALT', '13MfD;!N~dZctz8ERKF8ag9-$$Q8]41!O@loV^UB3B4!Ug7Z[{DFP,@_2tf*@vT$' );
define( 'LOGGED_IN_SALT',   'K@yLqS5N ()qMQElg!N;BcW_?2~5kSfYC4$Y3xAnnQFS;65N++V^}wn*P;C>cdV,' );
define( 'NONCE_SALT',       'XQ]abC6H!~d%rWy]!zpVwsg{`9?M~z-TVbP9~vu>wu~x#er[zpJXvf(G;C}=;~.|' );

/**#@-*/
define('JWT_AUTH_SECRET_KEY', 'XQ]abC6H!~d%rWy]!zpVwsg{`9?M~z-TVbP9~vu>wu~x#er[zpJXvf(G;C}=;~.|');
define('JWT_AUTH_CORS_ENABLE', true);
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
