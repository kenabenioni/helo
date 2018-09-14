CREATE TABLE helouser (
  user_id SERIAL PRIMARY KEY,
  username varchar(40),
  password varchar(40),
  profile_pic text
);

INSERT INTO helouser (username, password, profile_pic)
VALUES ('kenabenioni', 'hawaiian', 'https://pbs.twimg.com/media/DIw_tzQVYAA2Jpz.jpg');

CREATE TABLE helopost (
  post_id SERIAL PRIMARY KEY,
  title varchar(45),
  img text,
  content text,
  author_id integer references helouser(user_id)
);

INSERT INTO helopost (title, img, content, author_id)
VALUES ('doggo', 'https://www.askideas.com/wp-content/uploads/2016/11/Funny-Dog-Face-During-Selfie.jpg', 'this dog is cute', 1);