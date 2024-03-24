import argparse
import subprocess

def set_volume(volume):
    subprocess.run(["amixer", "-D", "pulse", "sset", "Master", f"{volume}%"])

def main():
    parser = argparse.ArgumentParser(description="Controle de volume do sistema")
    parser.add_argument("volume", type=int, help="O volume desejado (entre 0 e 100)")
    args = parser.parse_args()

    if args.volume < 0 or args.volume > 100:
        print("Erro: O volume deve estar entre 0 e 100")
        return

    try:
        set_volume(args.volume)
        print(f"Volume do sistema definido para {args.volume}%")
    except Exception as e:
        print("Erro ao definir o volume do sistema:", e)

if __name__ == "__main__":
    main()