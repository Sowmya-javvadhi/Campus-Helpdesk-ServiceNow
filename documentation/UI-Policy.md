
# UI Policy – Require Assigned To for In Progress

**Table:** Campus IT Ticket

**Policy Name:** Require Assigned To for In Progress

## Configuration

- Active: True
- On load: True
- Reverse if false: True

## Condition

State is In Progress.

## UI Policy Action

Field: Assigned To

Mandatory: True

## Expected Behaviour

When a ticket's state changes to In Progress,
the Assigned To field becomes mandatory.

This helps ensure that every ticket being
worked on has an assigned user.
