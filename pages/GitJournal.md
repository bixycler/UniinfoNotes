- 30/4 & 1/5
  - There are jungle photos on Telegram to be copied.
- 2025-06-04
  - The transfer between GitJournal and Logseq will be done through this single "queue". All contents in this queue will be flushed to UniinfoNotes in each sync.
    - The last block will be enqueued from the top.
    - This queue transfer only changes file content, thus avoid the file management issue of GitJournal.
    - After being flushed to `UniinfoNotes`/`GitJournal.md`, they can stay there as long as possible before being processed into other contents. Piling up, they can be flushed to history versions like `GitJournal-2025.md`.
    - `flushGitJournal.sh`
      ```sh
git pull
queue=GitJournal/queue.md
stack=../UniinfoNotes/pages/GitJournal.md
(tail -n +6 $queue; cat $stack) > stack
mv stack $stack
sed -i '6,$d' $queue
git commit -am 'Flushed GitJournal/queue.md'
git push
      ```
    - Images must be moved & renamed manually. E.g.
      - ![Grok-glitch.png](./img/d98b3b84fb8c3cee11c64a663cc79e41.png)
      - ![conversation-not-found.png](./img/9578cb1c92c865619736101ad4bd5364.png)
- last stuff remaining in the stack.