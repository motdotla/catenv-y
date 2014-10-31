# ❤Catenv-y❤

<img src="http://edgecats.net/" />

Demo application for [JS.LA](http://js.la)'s :yellow_heart: October 2014 module of the month presentation.

## Usage

```
npm install
cp .env.example .env
node app.js
```

Visit <http://localhost:3000>.

## Demo

```
Hi everyone. My name is "Mot". I'm from LA and a member of the excellent JS.LA.

This month's module of the month is Dotenv!

Dotenv loads environment variables from .env into ENV (process.env).

What does that mean? You can think of it as a configuration tool for your nodejs applications. You often have to configure things like MySQL credentials, MongoDB credentials, and many other settings for your application.

Node does not provide a good way to do this. But UNIX does. They are called environment variables, and you can access them with process.env. Dotenv piggybacks on the excellence of process.env so that you can easily set variables.

Best to show rather than tell. Let's see it in action.

Let's say you have an application like this one.

I have settings in this app like smtp host, to email, and much more.

I can hard code those in like this.

And then I can run it and visit the URL.

But what if I commit this code. I've just exposed those important configuration variables to anyone who gets their hands on my codebase.

You shouldn't store configuration in your code. You should store it in the environment. So let's do that.

>>add in dotenv module<<
>>run .load<<
>>create .env file<<
>>specify settings in .env file<<

Re-run the application.

See how simple that was.

And I'm getting catgifs to my email now.

That's it! 

But there is a huge added benefit to this - especially as you scale. You can quickly change settings now - on your servers without changing config code.

Who likes catgifs? I need your email. Can you yell it out to me - if it is reasonably easy to type.

Ok, now everyone hit this URL and send our friend with a bunch of catgif emails :)

So now I can run this app just like this, and the catgif emails will be delivered there. I can even run multiple repos this way. Let's try it.

See, how quick that was. This is very powerful if you are using chef, or doing anything of scale. It is also great for heroku - because you can just specify the config variables there. You don't need the .env file in production.
```


## Alternatives to Dotenv

+ [nconf](https://github.com/flatiron/nconf)
+ [config](https://github.com/lorenwest/node-config)
