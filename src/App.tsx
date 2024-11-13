export default function () {
  return (
    <article className="container mx-auto max-w-prose p-10 prose">
      <h1>The Farcaster Experiment</h1>
      <p>
        sup farcaster,{' '}
        <a target="_blank" href="https://warpcast.com/borodutch">
          @borodutch
        </a>{' '}
        here
      </p>
      <img src="/images/1.png" alt="@dwr laughing at dev feedback" />
      <p>
        after @dwr decided to laugh at my honest and <b>solicited</b> dev
        feedback, i decided to take action
      </p>
      <img src="/images/2.png" alt="@dwr gaslighting" />
      <p>
        especially after being gaslit like this into "you're the one that made a
        mistake"
      </p>
      <p>
        @dwr thinks that they haven't shipped a breaking change to hubs and
        every app that used the hubs should "just work"
      </p>
      <img src="/images/3.png" alt="@dwr goes all in" />
      well then, let's try this. i have launched a public farcaster hub at{' '}
      <code>34.172.154.21:2283</code> that i hooked{' '}
      <a target="_blank" href="https://warpcast.com/healthbot">
        @healthbot
      </a>{' '}
      into
      <p>
        for those of you who don't know,{' '}
        <a target="_blank" href="https://warpcast.com/healthbot">
          @healthbot
        </a>
        's <b>only</b> purpose is to send a reminder to warpcast every hour to
        straighten one's back, this is the code for it:
        <img src="/images/4.png" alt="@healthbot code" />
      </p>
      <p>
        literally just publishes a cast once an hour. let's see how it will go.
        if everything's to @dwr's expectations, the cast should be published
        every hour without issues, perpetually (or as long as my backend runs).
        i don't have any intention to shut down this backend, so it should be
        running for a while.
      </p>
      <p>
        follow{' '}
        <a target="_blank" href="https://warpcast.com/healthbot">
          @healthbot
        </a>{' '}
        to check if it is still running. i will not touch neither the hub i'm
        running (check its status at{' '}
        <a target="_blank" href="http://34.172.154.21:3000">
          34.172.154.21:3000
        </a>
        ), nor the backend.
      </p>
      <p>
        if it ever stops working, well, it shows us that there are, indeed,
        breaking changes to hubs, farcaster, whatever
      </p>
      <p>cheers</p>
    </article>
  )
}
