\c git_commands;

DROP TABLE IF EXISTS commands;


CREATE TABLE commands(
    command VARCHAR(1000),
    usage VARCHAR(1000),
    id SERIAL
);

\COPY commands(command, usage) FROM '/Users/ryanpannone/HR/webpack-babel-practice/git-cheat-sheet.csv' DELIMITER ',' CSV HEADER;



