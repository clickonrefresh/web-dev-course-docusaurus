# github ssh

```
ls -al ~/.ssh
```

```
ssh-keygen -t ed25519 -C "youremailornoreplyemail"
```

```
eval "$(ssh-agent -s)"
```

```
ssh-add ~/.ssh/id_ed25519
```

```
cat ~/.ssh/id_ed25519.pub
```

# github gpg

```
gpg --list-secret-keys --keyid-format=long
```

```
gpg --full-generate-key
```

```
gpg --list-secret-keys --keyid-format=long
```

```
gpg --armor --export "yoursecring"
```

```
git config --global user.signingkey "yoursecring"
```

