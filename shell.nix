{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  buildInput = [
    pkgs.nodejs_20
    pkgs.yarn];
    }

