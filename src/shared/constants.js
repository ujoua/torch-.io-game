module.exports = Object.freeze({
  PLAYER_RADIUS: 40,
  PLAYER_MAX_HP: 100,
  PLAYER_SPEED: 300,
  PLAYER_FIRE_COOLDOWN: 0.15,

  BULLET_RADIUS: 10,
  BULLET_SPEED: 700,
  BULLET_DAMAGE: 10,
  BULLET_RANGE: 450,

  PATH_RADIUS: 80,
  PATH_AUTOTUNE: 16,
  BULLET_RANGE: 500,
  BULLET_SATAN: 0.0001,

  SCORE_BULLET_HIT: 20,
  SCORE_PER_SECOND: 1,

  MAP_SIZE: 3000,
  MSG_TYPES: {
    JOIN_GAME: 'join_game',
    GAME_UPDATE: 'update',
    INPUT: 'input',
    GAME_OVER: 'dead',
  },
});
