# How to change VSCode filewatcher limit size

## Open the systcl file

```
sudo nano /etc/sysctl.conf
```

## Add the following line to the end of the file

```
fs.inotify.max_user_watches=524288
```

## Save and exit then restart sysctl

```
sudo sysctl -p
```


# Option 2

## Edit the VSCode settings in settings.json

```
"files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  }
```
[Exerpt from](https://stackoverflow.com/questions/50901127/vsc-unable-to-watch-for-file-changes-in-this-large-workspace-weird)



[Original Documentation VSCode](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)
