# Firmware Updates on Ubuntu

A quick reference for checking and applying firmware updates on Ubuntu using `fwupd`.

> [!TIP]
> If metadata is already refreshed, the quickest flow is:
> 
> ```bash
> fwupdmgr get-updates
> sudo fwupdmgr update
> ```

---

## Prerequisites

- Ubuntu system with internet access
- Admin access (`sudo`)

---

## 1. Install or Update `fwupd`

```bash
sudo apt update
sudo apt install -y fwupd
```

---

## 2. Refresh Firmware Metadata

```bash
sudo fwupdmgr refresh --force
```

---

## 3. List Detected Devices

```bash
fwupdmgr get-devices
```

---

## 4. Check for Available Updates

```bash
fwupdmgr get-updates
```

---

## 5. Apply Updates

```bash
sudo fwupdmgr update
```

Notes:
- Some updates require a reboot.
- Leave power connected on laptops during updates.

---

## 6. Verify History

```bash
fwupdmgr get-history
```

---

## Troubleshooting

- If no devices appear, verify that your hardware is supported by LVFS.
- If a firmware update fails, reboot and run the update command again.
- Check service status:

```bash
systemctl status fwupd
```
